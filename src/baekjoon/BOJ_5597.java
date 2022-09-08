package baekjoon;

import java.util.Arrays;
import java.util.Scanner;

public class BOJ_5597 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int [] a = new int [28];
		
		for(int i=0;i<28;i++) {
			a[i]=sc.nextInt();
		}
		
		Arrays.sort(a);
		
		for(int i=1;i<=30;i++) {
			int index = Arrays.binarySearch(a, i);
			if(index < 0)
				System.out.println(i);
		}

	}

}