<?php

namespace AppBundle\WebService\Utils;

class PlayerAccount
{
    public $user;
    public $login;
    public $game;
    public $active;
    public $created_at;
    public $updated_at;

    function __construct($user, $login ,$game, $active, $created_at, $updated_at){
        $this->user       = $user;
        $this->login      = $login;
        $this->game       = $game;
        $this->active     = $active;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }
}
