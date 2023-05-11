<template>
    <div>
        <h2>You've visited these states</h2>
        {{ visited }}
    
    </div>
    
</template>

<script>

export default {
    name: 'VisitedStates',
    data() {
        return {
            visited: []
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getVisistedStates().then( visited => {
                this.visited = this.visited
            }).catch(err => {
                console.log(err)
            })
        }
    }
}




</script>


