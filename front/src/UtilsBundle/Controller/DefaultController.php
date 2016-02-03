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
     * @Route("/users", name="all")
     */
    public function usersAction()
    {
        $userBDD = $this->container->get("UserBDD");
        $users = $userBDD->getUsers();
        return $this->render('UtilsBundle:Default:users.html.twig',(array("users"=>$users)));
    }

    /**
     * @Route("/userById/{id}")
     */
    public function userByIdAction($id)
    {
        $userBDD = new UserBDD($this->container->getParameter("webservice"));
        $user = $userBDD->getUserById($id);
        //$userBDD->addUser($user);
        return $this->render('UtilsBundle:Default:userById.html.twig',(array("user"=>$user)));
    }

    /**
     * @Route("/usersByUsername/{name}")
     */
    public function userByNameAction($name)
    {
        $userBDD = new UserBDD($this->container->getParameter("webservice"));
        $user = $userBDD->getUserByName($name);
        return $this->render('UtilsBundle:Default:userByUsername.html.twig',(array("user"=>$user)));
    }
}
