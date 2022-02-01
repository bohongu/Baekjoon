package BOJ;

import java.util.Scanner;

public class BOJ_9610 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int sumq1 = 0; 
		int sumq2 = 0; 
		int sumq3 = 0; 
		int sumq4 = 0; 
		int axis = 0;
		for(int i=0;i<n;i++) {
			int a = sc.nextInt();
			int b = sc.nextInt();
			if(a>0 && b>0) {
				sumq1 += 1;
			} else if (a<0 && b>0) {
				sumq2 += 1;
			} else if (a<0 && b<0) {
				sumq3 += 1;
			} else if (a>0 && b<0) {
				sumq4 += 1;
			} else if (a==0 || b==0) {
				axis += 1;
			}
		} 
		System.out.println("Q1: " + sumq1);
		System.out.println("Q2: " + sumq2);
		System.out.println("Q3: " + sumq3);
		System.out.println("Q4: " + sumq4);
		System.out.println("AXIS: " + axis);
		
	}

}
