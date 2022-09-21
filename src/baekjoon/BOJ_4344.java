package baekjoon;

import java.util.Scanner;

public class BOJ_4344 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int c = sc.nextInt();
		
		int[] arr;
		
		for(int i=0;i<c;i++) {
			int n = sc.nextInt();
			arr=new int[n];
			
			double total = 0;
			double avg = 0;
			
			for(int j=0;j<n;j++) {
				arr[j]=sc.nextInt();
				total += arr[j];
			}
			
			avg=(total/n);
			double cnt = 0;
			
			for(int j=0;j<n;j++) {
				if(arr[j] > avg) {
					cnt++;
				}
			}
			
			System.out.printf("%.3f%%\n",(cnt/n)*100);
		}

	}

}