<?php

namespace AppBundle\Controller;

use AppBundle\WebService\Utils\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;


class UserController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function usersAction(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add("email", TextType::class, array(
                'required'    => true,
            ))
            ->add("password", PasswordType::class, array(
                'required'    => true,
            ))
            ->add("Connexion", SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $login = $form->get("email")->getData();
            $password = $form->get("password")->getData();
            if($this->container->get("SecurityBDD")->authenticate($login,$password) == "invalid credentials"){
                $this->addFlash(
                    'invalid credentials',
                    'invalid credentials'
                );
            }
            else{
                return $this->render('AppBundle:User:connected.html.twig',(array("login"=>$login, "password"=>$password)));
            }
        }
        return $this->render('AppBundle:User:login.html.twig',(array("form" => $form->createView())));
    }
}
