package baekjoon;

import java.util.Scanner;

public class BOJ_1259 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		
		
		while(true) {
			String s = sc.next();
			if(s.equals("0")) {
				break;
			} else {	
				int cnt = 0;
				for(int i=0;i<s.length()/2;i++) {
					if(s.charAt(i)==s.charAt(s.length()-i-1)) {
						cnt++;
					}
				}
				
				if(cnt == s.length()/2) {
					System.out.println("yes");
				} else {
					System.out.println("no");
				}
			}	
		}
	}
}
