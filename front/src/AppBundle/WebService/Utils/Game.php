<?php

namespace AppBundle\WebService\Utils;


class Game
{
    public $id;
    public $name;
    public $releaseDate;
    public $multiPlayer;
    public $description;
    public $editor;
    public $created_at;
    public $updated_at;
    public $active;

    public function __construct($id, $name, $releaseDate, $multiplayer, $description, $editor, $created_at,$updated_at, $active){
        $this->id          = $id;
        $this->name        = $name;
        $this->releaseDate = $releaseDate;
        $this->multiplayer = $multiplayer;
        $this->description = $description;
        $this->editor      = $editor;
        $this->created_at  = $created_at;
        $this->updated_at  = $updated_at;
        $this->active      = $active;
    }

    public function __toString()
    {
        return $this->id." : ".$this->name;
    }
}