package BOJ;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_2954 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String n = br.readLine();
	
		if(n.contains("apa")) {
			n = n.replace("apa", "a");
		} if (n.contains("epe")) {
			n = n.replace("epe", "e");
		} if (n.contains("ipi")) {
			n = n.replace("ipi", "i");
		} if (n.contains("opo")) {
			n = n.replace("opo", "o");
		} if (n.contains("upu")) {
			n = n.replace("upu", "u");
		}
		
		System.out.println(n);
		

	}

}
