<?php
/**
 * Created by PhpStorm.
 * User: walid
 * Date: 21/06/2019
 * Time: 13:22
 */

namespace FormationBundle\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * User
 *
 * @ORM\Table("evenements")
 * @ORM\Entity
 */
class Evenements
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $nom ;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $description ;
    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbrparticipant ;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $langitude ;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $latitude ;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $type ;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getNbrparticipant()
    {
        return $this->nbrparticipant;
    }

    /**
     * @param mixed $nbrparticipant
     */
    public function setNbrparticipant($nbrparticipant)
    {
        $this->nbrparticipant = $nbrparticipant;
    }

    /**
     * @return mixed
     */
    public function getLangitude()
    {
        return $this->langitude;
    }

    /**
     * @param mixed $langitude
     */
    public function setLangitude($langitude)
    {
        $this->langitude = $langitude;
    }

    /**
     * @return mixed
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * @param mixed $latitude
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

}