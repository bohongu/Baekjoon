package baekjoon;

import java.util.Scanner;

public class BOJ_1978 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int count = 0;
		
		for(int i=0;i<n;i++) {
			int m = sc.nextInt();
			boolean prime = true;
			
			if(m==1) 
				continue;
			
			for(int j=2;j<=Math.sqrt(m);j++) {
				if(m%j == 0 ) {
					prime = false;
				}
			}
			if(prime) {
				count++;
			}
		}
		System.out.println(count);
		

	}

}
