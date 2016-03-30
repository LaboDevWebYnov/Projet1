<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace AppBundle\WebService\BDD;

use GuzzleHttp;
use Symfony\Component\Validator\Constraints\DateTime;
use AppBundle\WebService\Utils\Address;
use AppBundle\WebService\Utils\User;

class AddressBDD extends BDD
{
    public function getAddresses(){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/addresses/getAddresses';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $addresses=json_decode($res->getBody(),true);
        $addressesArray=array();
        foreach($addresses as $address) {
            $addressesArray[] = $this->createAddress($address);
        }
        return $addressesArray;
    }

    public function getAddressesByUserId($userId){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/addresses/'.$userId.'/getUserAddresses';
        $res = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $addresses=json_decode($res->getBody(),true);
        $addressesArray=array();
        foreach($addresses as $address) {
            $addressesArray[] = $this->createAddress($address);
        }
        return $addressesArray;
    }

    public function getAddressesById($addressId){
        $client  = new GuzzleHttp\Client();
        $url     = $this->webservice.'/addresses/'.$addressId.'/getAddressById';
        $res     = $client->request('GET', $url, array(
            "headers" => array(
                "token" => $_COOKIE["token"]
            )
        ));
        $address = json_decode($res->getBody(),true);
        return $this->createAddress($address);
    }

    public function addAddress($userId, $address){
        $client       = new GuzzleHttp\Client();
        $addressArray = (array) $address;

        $url = $this->webservice.'/addresses/'.$userId.'/addAddress';
        //Do not need to json_encode the data, pass it as array
        $client->request('POST', $url,array(
            'json' => $addressArray,
            "headers" => array(
                "token" => $_COOKIE["token"]
            )));
    }

    public function deactivateAddress($addressId, $address){
        $client       = new GuzzleHttp\Client();
        $addressArray = (array) $address;

        $url = $this->webservice.'/addresses/'.$addressId.'/deactivateAddress';

        //Do not need to json_encode the data
        $client->request('PUT',$url,array(
            'json' => $addressArray,
            "headers" => array(
                "token" => $_COOKIE["token"]
            )));
    }

    public function updateAddress($userId, $addressId, $address){
        $client       = new GuzzleHttp\Client();
        $addressArray = (array) $address;

        $url = $this->webservice.'/addresses/'.$userId.'/updateAddress/'.$addressId;
        //Do not need to json_encode the data
        $client->request('PUT',$url,array(
            'json' => $addressArray,
            "headers" => array(
                "token" => $_COOKIE["token"]
            )));

    }
}