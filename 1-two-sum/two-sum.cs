public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int[] result = new int[2];
        for (int i = 0; i<nums.Length;i++){
            for (int j = 0; j<nums.Length;j++){
                if (i == j){
                    int a = 0;
                }else if(nums[j]+nums[i] == target){
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return null;
    }
}