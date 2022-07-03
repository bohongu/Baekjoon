package baekjoon;

import java.util.Scanner;

public class BOJ_9625 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int k = sc.nextInt();
		int[] a = new int[46];
		int[] b = new int[46];
		
		a[1] = 0;
		a[2] = 1;
		b[1] = 1;
		b[2] = 1;
		
		for(int i=3;i<=k;i++) {
			a[i] = a[i-1] + a[i-2];
			b[i] = b[i-1] + b[i-2];
		}
		
		System.out.println(a[k]+" "+b[k]);

	}

}