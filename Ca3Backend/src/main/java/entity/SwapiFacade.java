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
public class SwapiFacade implements Callable {
    
    int id;
    
    public SwapiFacade(int id){
        this.id = id;
    }
    
    public String getSwapiPeople() throws ProtocolException, MalformedURLException, IOException{
    URL url = new URL("https://swapi.co/api/people/");
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
    
    public String getSwapiPlanets() throws ProtocolException, MalformedURLException, IOException{
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
    
    public String getSwapiStarships() throws ProtocolException, MalformedURLException, IOException{
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
    public String getSwapiVehicles() throws ProtocolException, MalformedURLException, IOException{
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
    
    public String getSwapiSpecies() throws ProtocolException, MalformedURLException, IOException{
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
    

    
    
    @Override
    public String call() throws Exception {
        switch(id){
            case 1: return getSwapiPlanets();
            case 2: return getSwapiStarships();
            case 3: return getSwapiVehicles();
            case 4: return getSwapiSpecies();
            default: return getSwapiPeople();
        }
        
        
    }
    
    public static void main(String[] args){
        ExecutorService executor = Executors.newFixedThreadPool(5);
        List<Future<String>> list = new ArrayList();
        
        for(int i = 0; i < 5; i++){
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
    }
}
}




