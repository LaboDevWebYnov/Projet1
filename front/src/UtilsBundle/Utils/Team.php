<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 09/12/2015
 * Time: 12:18
 */

namespace UtilsBundle;


class Team
{
    public $name;
    public $tag;
    public $captain;
    public $players;
    public $invitedPlayers;
    public $postulatedPlayers;
    public $active;
    public $game;
    public $created_at;
    public $updated_at;

    public function Team($name,$tag,$captain,$players,$invitedPlayers,$postulatedPlayers,$game,$created_at,$updated_at){
        $this->name=$name;
        $this->tag=$tag;
        $this->captain=$captain;
        $this->players=$players;
        $this->invitedPlayers=$invitedPlayers;
        $this->postulatedPlayers=$postulatedPlayers;
        $this->game=$game;
        $this->created_at=$created_at;
        $this->updated_at=$updated_at;
    }
}