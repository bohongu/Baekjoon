package baekjoon;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class BOJ_11866 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int k = sc.nextInt();
		LinkedList<Integer> queue = new LinkedList<Integer>();
		String submit = "<";
		
		for(int i=1;i<=n;i++) {
			queue.add(i);
		}
		while(queue.size() > 0) {
			for(int i=0;i<k-1;i++) {
				int temp = queue.poll();
				queue.add(temp);
			}
			submit += queue.poll() + ", ";
		}
		String result = submit.substring(0, submit.length()-2);
		result += ">";
		System.out.println(result);
	}
}
