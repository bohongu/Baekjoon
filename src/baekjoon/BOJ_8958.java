package baekjoon;

import java.util.Scanner;

public class BOJ_8958 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		char [] arr = new char[80];
		
		String s = "";
		
		for(int i=0;i<t;i++) {
			int cnt = 0;
			int sum = 0;
			s = sc.next();
			for(int j=0;j<s.length();j++) {
				arr[j]=s.charAt(j);
				
				if(arr[j]=='O') {
					cnt++;
				} else {
					cnt = 0;
				}
				
				sum += cnt;
			}
			System.out.println(sum);
		}
		
		

	}

}
