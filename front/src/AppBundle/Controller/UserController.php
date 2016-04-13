<?php

namespace AppBundle\Controller;

use AppBundle\WebService\Utils\Game;
use AppBundle\WebService\Utils\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;


class UserController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function userLoginAction(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add("email", EmailType::class, array(
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

    /**
     * @Route("/subscription", name="subscription")
     */
    public function userSubscriptionAction(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add("firstname", TextType::class, array(
                'required'    => true,
            ))
            ->add("lastname", TextType::class, array(
                'required'    => true,
            ))
            ->add("username", TextType::class, array(
                'required'    => true,
            ))
            ->add('birthDate', DateType::class, array(
                'input'  => 'datetime',
                'widget' => 'choice',
            ))
            ->add("email", EmailType::class, array(
                'required'    => true,
            ))
            ->add("password", PasswordType::class, array(
                'required'    => true,
            ))
            ->add("passwordConfirmation", PasswordType::class, array(
                'required'    => true,
            ))
            ->add("phoneNumber", NumberType::class, array(
                'required'    => true,
            ))/*
            ->add("interests", TextType::class, array(
                'required'    => true,
            ))
            ->add("friends", TextType::class, array(
                'required'    => true,
            ))
            ->add("address", TextType::class, array(
                'required'    => true,
            ))*/
            ->add("Inscription", SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $firstname = $form->get("firstname")->getData();
            $lastname = $form->get("lastname")->getData();
            $username = $form->get("username")->getData();
            $birthDate = $form->get("birthDate")->getData();
            $birthDate = $birthDate->format("Y-m-d");
            $email = $form->get("email")->getData();
            $password = $form->get("password")->getData();
            $phoneNumber = $form->get("phoneNumber")->getData();/*
            $interests = $form->get("interests")->getData();
            $friends = $form->get("friends")->getData();
            $address = $form->get("address")->getData();*/
            $interests = null;
            $friends   = null;
            $address   = null;
            $admin     = null;
            $created_at = new \DateTime();
            $created_at = $created_at->format("Y-m-d");
            $updated_at = $created_at;
            /*echo "<pre>";
            print_r($interests);
            print_r($friends);
            print_r($address);
            print_r($created_at);
            echo "</pre>";*/
            $user = new User(0,
                $firstname,
                $lastname,
                $username,
                $birthDate,
                $email,
                $password,
                $phoneNumber,
                0,
                false,
                $created_at,
                $updated_at,
                $interests,
                $friends,
                true,
                false,
                $address);
            print_r($user);
            $this->container->get("UserBDD")->addUser($user);
            return $this->render('AppBundle:User:connected.html.twig',(array("login"=>$user->username, "password"=>$user->password)));
            /*
            if($this->container->get("UserBDD")->addUser($user) == "invalid credentials"){
                $this->addFlash(
                    'invalid credentials',
                    'invalid credentials'
                );
            }
            else{
                return $this->render('AppBundle:User:connected.html.twig',(array("login"=>$login, "password"=>$password)));
            }*/
        }
        return $this->render('AppBundle:User:login.html.twig',(array("form" => $form->createView())));
    }
}
