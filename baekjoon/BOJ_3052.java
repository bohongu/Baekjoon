package BOJ;

import java.util.HashSet;
import java.util.Scanner;

public class BOJ_3052 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		HashSet arr = new HashSet();
		
		for(int i = 1;i<=10;i++) {
			int n =sc.nextInt();
			arr.add(n%42);
		}
		System.out.println(arr.size());
		
		
		
		
	}

}
