import React from "react";
import FormationList from "./FormationList";
import Formation from "./Formation";
import oc_logo from "./openclassroom.jpg";
import esgi_logo from "./esgi.png";
import intech_logo from "./intech.png";
import uag_logo from "./uag.jpg";

export default function AllFormations() {
  return (
    <FormationList>
      <Formation
        diploma="Développeur Web Full Stack"
        school="OpenClassRooms"
        url="https://openclassrooms.com"
        logoUrl={oc_logo}
        years="2021"
      />
      <Formation
        diploma="Ingénieur Développement Applications 3D et Jeux-Vidéos"
        school="ESGI"
        url="https://www.esgi.fr"
        logoUrl={esgi_logo}
        years="2017"
      />
      <Formation
        diploma="Technicien Génie Logiciel"
        school="IN'TECH INFO"
        url="https://www.intechinfo.fr/"
        logoUrl={intech_logo}
        years="2015"
      />
      <Formation
        diploma="Licence Informatique et Mathématiques appliqués"
        school="Université des Antilles "
        url="http://www.univ-ag.fr"
        logoUrl={uag_logo}
        years="2014"
      />
    </FormationList>
  );
}
