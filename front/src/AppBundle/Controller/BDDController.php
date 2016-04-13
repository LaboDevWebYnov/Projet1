<?php

namespace AppBundle\Controller;

use AppBundle\WebService\Utils\Address;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class BDDController extends Controller
{
    /**
     * @Route("/users", name="all")
     */
    public function usersAction()
    {
        $userBDD = $this->container->get("UserBDD");
        $users = $userBDD->getUsers();
        return $this->render('AppBundle:Default:users.html.twig',(array("users"=>$users)));
    }

    /**
     * @Route("/games")
     */
    public function gamesAction()
    {
        $gameBDD = $this->container->get("GameBDD");
        $games = $gameBDD->getGames();
        return $this->render('AppBundle:Default:games.html.twig',(array("games"=>$games)));
    }

    /**
     * @Route("/playerAccounts")
     */
    public function playerAccountsAction()
    {
        $playerAccountBDD = $this->container->get("PlayerAccountBDD");
        $playerAccounts = $playerAccountBDD->getPlayerAccounts();
        return $this->render('AppBundle:Default:playerAccounts.html.twig',(array("playerAccounts"=>$playerAccounts)));
    }

    /**
     * @Route("/addresses")
     */
    public function addressesAction()
    {
        $addressBDD = $this->container->get("AddressBDD");
        $addresses = $addressBDD->getAddressesByUserId("568fdfab448eb7cc11de3646");
        return $this->render('AppBundle:Default:addresses.html.twig',(array("addresses"=>$addresses)));
    }

    /**
     * @Route("/addAddress")
     */
    public function addAddressAction()
    {
        $addressBDD = $this->container->get("AddressBDD");
        $address = new Address(15, "lyon", "france","45");
        $addresses = $addressBDD->addAddress("568fdfab448eb7cc11de3646", $address);
        return $this->addressesAction();
    }

    /**
     * @Route("/userById/{id}")
     */
    public function userByIdAction($id)
    {
        $userBDD = $this->container->get("UserBDD");
        $user = $userBDD->getUserById($id);
        echo "<pre>";
        print_r($user);
        echo "</pre>";
        $user->username = "test";
        $user->password = "test";
        $user->email = "lacoste.antoine@orange.fr";
        //$userBDD->addUser($user);
        return $this->render('AppBundle:Default:userById.html.twig',(array("user"=>$user)));
    }

    /**
     * @Route("/usersByUsername/{name}")
     */
    public function userByNameAction($name)
    {
        $userBDD = $this->container->get("UserBDD");
        $user = $userBDD->getUserByName($name);
        return $this->render('AppBundle:Default:userByUsername.html.twig',(array("user"=>$user)));
    }
}
