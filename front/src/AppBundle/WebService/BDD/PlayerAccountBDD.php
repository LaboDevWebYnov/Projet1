<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace AppBundle\WebService\BDD;

use AppBundle\WebService\Utils\Game;
use GuzzleHttp;

class PlayerAccountBDD extends BDD
{
    public function getPlayerAccounts(){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/playerAccount';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $playerAccounts=json_decode($res->getBody(),true);
        $playerAccountsArray=array();
        foreach($playerAccounts as $playerAccount) {
            $playerAccountsArray[] = $this->createPlayerAccount($playerAccount);
        }
        return $playerAccountsArray;
    }

    public function getPlayerAccountById($playerAccountId){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/playerAccount/'.$playerAccountId.'/getPlayerAccountById';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $playerAccount=json_decode($res->getBody(),true);
        return $this->createPlayerAccount($playerAccount);
    }

    public function getPlayerAccountByUserId($userId){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/playerAccount/'.$userId.'/getPlayerAccountByUserId';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $playerAccount=json_decode($res->getBody(),true);
        return $this->createPlayerAccount($playerAccount);
    }

    public function getPlayerAccountByLogin($playerAccountId){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/playerAccount/'.$playerAccountId.'/getPlayerAccountByLogin';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $playerAccount=json_decode($res->getBody(),true);
        return $this->createPlayerAccount($playerAccount);
    }

    public function addPlayerAccount($userId, $gameId){
        $client       = new GuzzleHttp\Client();

        $url = $this->webservice.'/playerAccount/'.$userId.'/addPlayerAccount/'.$gameId;
        //Do not need to json_encode the data, pass it as array
        $client->request('POST', $url,array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )));
    }
}