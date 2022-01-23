package BOJ;

import java.util.*;
import java.io.*;


public class BOJ_15552 {

	public static void main(String[] args) throws Exception{
		int result = 0;
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int t = Integer.parseInt(br.readLine());
		StringTokenizer st;
		
		for(int i=0;i<t;i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			result = a+b;
			bw.write(result + "\n");
			
		}
		bw.flush();
		bw.close();
		

	}

}
