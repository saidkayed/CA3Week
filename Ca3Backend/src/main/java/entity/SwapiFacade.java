/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 *
 * @author tobbe
 */
public class SwapiFacade implements Callable<String> {

    public int id;
    public String url;
    
    public SwapiFacade(String url, int id) {
        this.url = url;
        this.id = id;
        System.out.println(id);
    }
    
    @Override
    public String call() throws Exception {
        return getSwapiPeople(url, id);
       
        
    }
        
        /*switch (id) {
            case 1:
                return getSwapiPeople(id);
            case 2:
                return getSwapiPeople(id);
            case 3:
                return getSwapiPeople(id);
            case 4:
                return getSwapiPeople(id);
            default:
                return getSwapiPeople(id);
        }*/


    public String getSwapiPeople(String urlString, int id) throws ProtocolException, MalformedURLException, IOException {
        URL url = new URL(urlString + id);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        con.setRequestProperty("User-Agent", "server");
        Scanner scan = new Scanner(con.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    public String getSwapiPlanets() throws ProtocolException, MalformedURLException, IOException {
        URL url = new URL("https://swapi.co/api/planets/");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        con.setRequestProperty("User-Agent", "server");
        Scanner scan = new Scanner(con.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    public String getSwapiStarships() throws ProtocolException, MalformedURLException, IOException {
        URL url = new URL("https://swapi.co/api/starships/");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        con.setRequestProperty("User-Agent", "server");
        Scanner scan = new Scanner(con.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    public String getSwapiVehicles() throws ProtocolException, MalformedURLException, IOException {
        URL url = new URL("https://swapi.co/api/vehicles/");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        con.setRequestProperty("User-Agent", "server");
        Scanner scan = new Scanner(con.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    public String getSwapiSpecies() throws ProtocolException, MalformedURLException, IOException {
        URL url = new URL("https://swapi.co/api/species/");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        con.setRequestProperty("User-Agent", "server");
        Scanner scan = new Scanner(con.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }

    

    
    }

