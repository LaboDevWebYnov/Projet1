<?php

namespace UtilsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use GuzzleHttp;
use UtilsBundle\UserBDD;

class DefaultController extends Controller
{
    /**
     * @Route("/guzzle")
     */
    public function indexAction()
    {
        $users=$this->guzzle();
        return $this->render('UtilsBundle:Default:index.html.twig',(array("users"=>$users)));
    }

    public function guzzle(){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:3000/api/users');
        $user=json_decode($res->getBody());
        return $user;
    }
}
