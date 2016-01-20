<?php

namespace UtilsBundle\Utils;


class Game
{
    public $name;
    public $releaseDate;
    public $multiPlayer;
    public $description;
    public $editor;
    public $created_at;
    public $updated_at;

    function Game($name, $releaseDate, $multiplayer, $description, $editor, $created_at,$updated_at){
        $this->name=$name;
        $this->releaseDate=$releaseDate;
        $this->multiplayer=$multiplayer;
        $this->description=$description;
        $this->editor=$editor;
        $this->created_at=$created_at;
        $this->updated_at=$updated_at;
    }
}