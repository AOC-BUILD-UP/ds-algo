mod crystal_ball;

#[cfg(test)]
mod tests {
    use crate::crystal_ball::crystal_ball_an::crystal_ball;

    #[test]
    fn it_works() {
        let nums = vec![0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
        let result = crystal_ball(&nums);
        assert_eq!(result, 9);
    }
}
