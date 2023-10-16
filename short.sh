echo "Hello! Welcome to the AOC build up companion"

home="$(pwd)"
ts="$home/ts/"

alias ts="cd $ts"
alias tests="cd $ts/tests/"
alias questions="cd $ts/questions/"
alias test_crystal_ball="npm run test_crystal_ball"
alias test_binary_search="npm run test_binary_search"

crystal_ball() {
	new_home="$(pwd)"
	cd $ts
	test_crystal_ball
	cd $new_home
}

binary_search() {
	new_home="$(pwd)"
	cd $ts
	test_binary_search
	cd $new_home
}

echo "crystal_ball and binary_search added!"
