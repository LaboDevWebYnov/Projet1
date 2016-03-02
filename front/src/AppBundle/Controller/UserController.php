<?php

namespace AppBundle\Controller;

use AppBundle\WebService\Utils\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;

class UserController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function usersAction(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add("login")
            ->add("password")
            ->add("Connexion", SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $login = $form->get("login")->getData();
            $password = $form->get("password")->getData();
            return $this->render('AppBundle:User:connected.html.twig',(array("login"=>$login, "password"=>$password)));
        }
        return $this->render('AppBundle:User:login.html.twig',(array("form" => $form->createView())));
    }
}
