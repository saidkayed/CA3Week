/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.mysql.fabric.Response;
import entity.PaginationFacade;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author tobbe
 */
@Path("pagination")
public class PaginationResource {

    @Context
    private UriInfo context;

    PaginationFacade pf = new PaginationFacade();
    /**
     * Creates a new instance of PaginationResource
     */
    public PaginationResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getSwapiPeople() throws MalformedURLException, IOException {
        return pf.getDummyData();
    }
}
