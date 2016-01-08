<?php

namespace UtilsBundle;


class Player
{
    public $user;
    public $login;
    public $game;
    public $created_at;
    public $updated_at;

    function Player($user,$login,$game,$created_at,$updated_at){
        $this->user=$user;
        $this->login=$login;
        $this->game=$game;
        $this->created_at=$created_at;
        $this->updated_at=$updated_at;
    }
}
