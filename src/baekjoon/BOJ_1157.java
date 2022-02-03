package baekjoon;

import java.util.Scanner;

public class BOJ_1157 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String s = sc.next();
		int [] arr = new int[26];
		int max = 0;
		char ch = '?';
		
		for(int i=0;i<s.length();i++) {
			if(s.charAt(i) >= 65 && s.charAt(i) <=90) {
				arr[s.charAt(i) - 'A']++;
			} else {
				arr[s.charAt(i)- 'a']++;
			}
		}
		
		for(int i=0;i<arr.length;i++) {
			if(max < arr[i]) {
				max = arr[i];
				ch = (char)(i+65);
			} else if (arr[i] == max) {
				ch = '?';
			}
		}
		System.out.println(ch);
	}

}
