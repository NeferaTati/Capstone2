import

import java.util.Scanner;


public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    // Read an initial data

    System.out.print("Enter an int value (the program exits if the input is 0): ");
    int data = input.nextInt();
    //  reading data until the input is 0

    int sum = 0;
    while (data != 0) {
        sum += data;
        // Reading.... the next data

        System.out.print("Enter an int value (the program exits if the input is 0): ");
        data = input.nextInt();
    }
    System.out.println("The sum is " + sum);
}
