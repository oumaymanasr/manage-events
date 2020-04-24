<?php

namespace FormationBundle\Controller;

use FormationBundle\Entity\Evenements;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EvenementsController extends FOSRestController
{
    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }

    /**
     * @Rest\Post("evenements", name="evenements")
     * @param Request $request
     * @return Response
     */
    public function postOffreAction(Request $request)
    {

        $data = new Evenements();
        $nom = $request->get('nom');
        $description = $request->get('description');
        $nbrparticipant = $request->get('nbrparticipant');
        $langitude = $request->get('langitude');
        $latitude = $request->get('latitude');
        $type = $request->get('type');
        $data->setNom($nom);
        $data->setDescription($description);
        $data->setNbrparticipant($nbrparticipant);
        $data->setLatitude($latitude);
        $data->setLangitude($langitude);
        $data->setType($type);
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();
        $view =new View("Offre Added Successfully", Response::HTTP_OK);

        return $this->handleView($view);
    }
    /**
     * @Rest\Put("{id}/evenements")
     * @param Request $request
     * @return Response
     */
    public function puttOffreAction(Request $request)
    {
        $data = new Evenements();
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $data=$this->getDoctrine()->getRepository('FormationBundle:Evenements')->find($id);
        $nom = $request->get('nom');
        $description = $request->get('description');
        $nbrparticipant = $request->get('nbrparticipant');
        $langitude = $request->get('langitude');
        $latitude = $request->get('latitude');
        $type = $request->get('type');
        $data->setNom($nom);
        $data->setDescription($description);
        $data->setNbrparticipant($nbrparticipant);
        $data->setLatitude($latitude);
        $data->setLangitude($langitude);
        $data->setType($type);
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();
        $view =new View("Offre Added Successfully", Response::HTTP_OK);

        return $this->handleView($view);
    }
    /**
     * @Rest\Delete("{id}/evenements", name="_evenements")
     * @param Request $request
     * @return Response
     */
    public function deleteAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $data=$this->getDoctrine()->getRepository('FormationBundle:Evenements')->find($id);
        $em->remove($data);
        $em->flush();
        $view =new View("Offre deleted Successfully", Response::HTTP_OK);
        return $this->handleView($view);
    }
    /**
     * @Rest\Get("evenements", name="_evenementss")
     * @param Request $request
     * @return Response
     */
    public function getAction(Request $request)
    {
        //var_dump('hello');die();
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $data=$this->getDoctrine()->getRepository('FormationBundle:Evenements')->findAll();
        $view =new View("Offre deleted Successfully", Response::HTTP_OK);
        return $data;
    }
}
