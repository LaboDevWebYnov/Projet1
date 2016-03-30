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

class GameBDD extends BDD
{
    public function getGames(){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/games';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $games=json_decode($res->getBody(),true);
        $gamesArray=array();
        foreach($games as $game) {
            $gamesArray[] = $this->createGame($game);
        }
        return $gamesArray;
    }

    public function getGameById($gameId){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/games/'.$gameId.'/getGameById';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $game=json_decode($res->getBody(),true);
        return $this->createGame($game);
    }

    public function getGameByName($gameName){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/games/'.$gameName.'/getGameByName';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $game=json_decode($res->getBody(),true);
        return $this->createGame($game);
    }

    public function deleteGame($gameId){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/games/'.$gameId.'/deleteGame';
        $client->request('PUT', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
    }

    public function updateGame($game){
        $client       = new GuzzleHttp\Client();
        $gameId       = $game->id;
        $gameArray    = (array) $game;

        //Remove the id key from the user object to respect the API add format
        unset($gameArray["id"]);
        unset($gameArray["active"]);

        $url = $this->webservice.'/games/'.$gameId.'/updateGame';

        //Do not need to json_encode the data
        $client->request('PUT',$url,array(
            'json' => $gameArray,
            "headers" => array(
                "token" => $_COOKIE["token"]
            )));
    }

    public function addGame($game){
        $client       = new GuzzleHttp\Client();
        $gameArray    = (array) $game;

        //Remove the id key from the user object to respect the API add format
        unset($gameArray["id"]);

        $url = $this->webservice.'/games/addGame';
        //Do not need to json_encode the data, pass it as array
        $client->request('POST', $url,array(
            'json' => $gameArray,
            "headers" => array(
                "token" => $_COOKIE["token"]
            )));
    }
}