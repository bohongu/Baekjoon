package BOJ;

import java.util.Scanner;

public class BOJ_1110 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int cnt = 0;
		int tmp = n;
		while(true) {
			int first = n/10;
			int second = n%10;
			n = second * 10 + (first+second)%10;
			cnt++;
			if(tmp == n) {
				break;
				
			}
				
		}
		System.out.println(cnt);
		
	}

}
