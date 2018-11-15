/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import entity.SwapiFacade;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
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

    SwapiFacade sf = new SwapiFacade(1);
    public SwapiResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("people")
    public String getSwapiPeople() throws MalformedURLException, IOException {
        List<String> mylist = new ArrayList();
        
        ExecutorService executor = Executors.newFixedThreadPool(5);
        List<Future<String>> list = new ArrayList();
        for(int i = 1; i < 6; i++){
            Callable<String> callable = new SwapiFacade(i);
            Future<String> future = executor.submit(callable);
            list.add(future);
        }
        for (Future<String> fut: list){
            try{
                mylist.add(fut.get());
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        executor.shutdown();
        }
        return new Gson().toJson(mylist);
    }
        
    }
    
    /* ExecutorService executor = Executors.newFixedThreadPool(5);
        List<Future<String>> list = new ArrayList();
        
        for(int i = 1; i < 6; i++){
            Callable<String> callable = new SwapiFacade(i);
            Future<String> future = executor.submit(callable);
            list.add(future);
        }
        for (Future<String> fut: list){
            try{
                System.out.println(fut.get());
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        executor.shutdown();
    }*/

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
