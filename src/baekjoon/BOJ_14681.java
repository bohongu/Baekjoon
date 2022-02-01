package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_14681 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int x = Integer.parseInt(br.readLine());
		int y = Integer.parseInt(br.readLine());
		int result;
		
		if (x>0) {
			result = (y > 0) ? 1 : 4;
		} else {
			result = (y > 0) ? 2 : 3;
		}
		
		System.out.println(result);

	}

}
