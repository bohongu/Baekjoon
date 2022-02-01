package BOJ;

import java.util.Scanner;

public class BOJ_2908 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		
		int reva, revb;
		
		reva = a/100 + ((a%100)/10)*10 + (a%10)*100;
		revb = b/100 + ((b%100)/10)*10 + (b%10)*100;
		
		if(reva < revb) {
			System.out.println(revb);
		} else {
			System.out.println(reva);
		}
	}

}
