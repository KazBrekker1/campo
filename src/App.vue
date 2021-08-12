<template>
	<nav id="nav" class="navbar bg-dark sticky-top p-1 shadow-sm justify-content-between">
		<router-link class="nav-item" to="/">Camp Management</router-link>
	</nav>
	<!-- <router-view /> -->
	<div class="d-flex flex-wrap justify-content-around p-4 gap-5">
		<div v-for="team in teams" :key="team.name" class="card w-25">
			<div class="card-header h4">Team: {{ team.name }}</div>
			<div class="card-body overflow-auto" style="height: 30rem">
				<h5 class="card-title">Achievments</h5>
				<ul class="list-group my-3">
					<li
						v-for="achievement in team.achievements"
						:key="achievement.name"
						class="list-group-item d-flex justify-content-between align-items-center"
					>
						{{ achievement.name }}
						<span class="badge rounded-pill fs-6 px-3" :class="achievement.points > 0 ? 'bg-success' : 'bg-danger'">{{ achievement.points }}</span>
					</li>
				</ul>
				<button class="btn btn-primary" @click="addAchievement(team.name)">Add Achievement</button>
				<hr />
				<h5 class="card-title">Members</h5>
				<ul class="list-group my-3">
					<li v-for="member in team.members" :key="member" class="list-group-item d-flex justify-content-between align-items-center">
						{{ member }}
					</li>
				</ul>
				<button class="btn btn-primary" @click="addMember(team.name)">Add Member</button>
			</div>
			<div class="card-footer text-muted">
				Score:
				{{
					team.achievements.reduce((a, b) => {
						return (a += b.points)
					}, 0)
				}}
			</div>
		</div>
		<div class="addNew">
			<button class="btn btn-success p-5 fs-2" @click="addTeam">+</button>
			<button class="btn btn-danger p-5 fs-5" @click="clearEverything">Reset</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"

let teams = ref([])
onMounted(() => {
	if (!localStorage.getItem("teams")) {
		localStorage.setItem("teams", JSON.stringify(teams.value))
	} else {
		teams.value = JSON.parse(localStorage.getItem("teams"))
	}
})
const addAchievement = (teamName) => {
	let acheievemntName = prompt("Enter the name of the Achievement")
	let acheievemntPoints = prompt("Enter Value of Event")
	if (acheievemntName && acheievemntPoints) {
		let selectedTeam = teams.value.filter((team) => team.name == teamName)[0]
		selectedTeam["achievements"].push({ name: acheievemntName, points: parseInt(acheievemntPoints) })
		localStorage.setItem("teams", JSON.stringify(teams.value))
	}
}
const addMember = (teamName) => {
	let memberName = prompt("Enter the name of the Member")
	if (memberName) {
		let selectedTeam = teams.value.filter((team) => team.name == teamName)[0]
		selectedTeam["members"].push(memberName)
		localStorage.setItem("teams", JSON.stringify(teams.value))
	}
}
const addTeam = () => {
	let teamName = prompt("Enter the name of the team")
	if (teamName) {
		let team = { name: teamName, members: [], achievements: [] }
		teams.value.push(team)
		localStorage.setItem("teams", JSON.stringify(teams.value))
	}
}
const clearEverything = () => {
	let password = prompt("Enter Secret Code")
	if (password == "Tabok") {
		localStorage.clear("teams")
		teams.value = []
	} else {
		alert("Ask an Organizer")
	}
}
</script>

<style lang="scss">
html,
body,
#app {
	height: 100vh;
	width: 100vw;
	background-color: #2c3e50;
}
.addNew {
	gap: 5rem;
	display: grid;
	place-items: center;
}
#app {
	font-family: monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#nav {
	display: grid;
	grid-auto-flow: column;
	a {
		margin: 10px;
		font-size: 30px;
		font-family: monospace;
		color: whitesmoke;
		text-decoration: none;
		transition: 200ms ease-in-out;
		&:hover {
			color: #eee199;
		}
		&.router-link-exact-active {
			color: #f3d631;
		}
	}
	h3 {
		color: #f3d631;
	}
}
</style>
