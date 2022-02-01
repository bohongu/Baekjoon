package BOJ;

import java.util.Scanner;

public class BOJ_8393 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		sc.close();
		int sum = 0;
		for(int i=0;i<=a;i++) {
			sum += i;	
		}
		System.out.println(sum);

	}

}
