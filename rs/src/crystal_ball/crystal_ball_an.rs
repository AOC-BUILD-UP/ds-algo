pub fn crystal_ball(nums: &Vec<i8>) -> usize {
    for i in 0..nums.len() {
        if nums[i] == 1 {
            return i;
        }
    }

    0
}
