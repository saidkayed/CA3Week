/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.Scanner;

/**
 *
 * @author tobbe
 */
public class PaginationFacade {
    
    public String getDummyData() throws ProtocolException, MalformedURLException, IOException{
    URL url = new URL("http://localhost:1234/api/");
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
    con.setRequestMethod("GET");
    con.setRequestProperty("Accept", "application/json;charset=UTF-8");
    con.setRequestProperty("User-Agent", "server");
    Scanner scan = new Scanner(con.getInputStream());
    String jsonStr = "";
    while (scan.hasNext()) {
      jsonStr += scan.nextLine();
    }
    scan.close();
    return jsonStr;
    }
}
