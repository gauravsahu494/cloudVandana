import java.util.*;
public class ShuffleArray {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        for(int i=1;i<=7;i++){
            list.add(i);
        }
        
        Collections.shuffle(list);
        
        for (int value : list) {
            System.out.print(value + " ");
        }
    }
}