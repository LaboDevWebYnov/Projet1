<?php

namespace HelloBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/hello/{name}")
     */
    public function indexAction($name)
    {
        return $this->render('HelloBundle:Default:users.html.twig',array("name"=>$name));
    }

    /**
     * @Route("/hello")
     */
    public function worldAction()
    {
        return $this->render('HelloBundle:Default:users.html.twig',array("name"=>"world"));
    }
}