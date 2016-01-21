<?php

namespace UtilsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use GuzzleHttp;
use UtilsBundle\BDD\UserBDD;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/users")
     */
    public function usersAction()
    {
        $users = UserBDD::getUsers();
        return $this->render('UtilsBundle:Default:users.html.twig',(array("users"=>$users)));
    }

    /**
     * @Route("/usersById/{id}")
     */
    public function userByidAction($id)
    {
        $user = UserBDD::getUserById($id);
        UserBDD::addUser($user);
        return $this->render('UtilsBundle:Default:userById.html.twig',(array("user"=>$user)));
    }

    /**
     * @Route("/usersByUsername/{name}")
     */
    public function userByNameAction($name)
    {
        $user = UserBDD::getUserByName($name);
        return $this->render('UtilsBundle:Default:userByUsername.html.twig',(array("user"=>$user)));
    }
}
