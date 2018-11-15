/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import entity.SwapiFacade;
import java.io.IOException;
import java.net.MalformedURLException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author tobbe
 */
@Path("swapi")
public class SwapiResource {

    @Context
    private UriInfo context;

    SwapiFacade sf = new SwapiFacade();
    public SwapiResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("people")
    public String getSwapiPeople() throws MalformedURLException, IOException {
        return sf.getSwapiPeople();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("planets")
    public String getSwapiPlanets() throws MalformedURLException, IOException {
        return sf.getSwapiPlanets();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("starships")
    public String getSwapiStarships() throws MalformedURLException, IOException {
        return sf.getSwapiStarships();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("vehicles")
    public String getSwapiVehicles() throws MalformedURLException, IOException {
        return sf.getSwapiVehicles();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("species")
    public String getSwapiFilms() throws MalformedURLException, IOException {
        return sf.getSwapiSpecies();
    }
    
}