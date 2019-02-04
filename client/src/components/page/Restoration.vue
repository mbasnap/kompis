<template>
<div>
    <p class="editMenu">
        <a v-show="edit === false" @click="showEditor" >edit</a> 
        <a v-show="isChanged" @click="save">save</a> 
        <a v-show="edit !== false" @click="closeEditor">close</a>
    </p>
    <div v-show="edit === false" v-html="pageContent"></div>
    <tinymce id="d1" v-show="edit !== false" v-model="editContent" ></tinymce>
</div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'
import {mapActions} from 'vuex'
export default {
    components: {tinymce},
    data() {
        return {
            edit: false
        }
    },
  watch: {
    $route (to, from){
        this.closeEditor()
    }
  },
    computed: {
        

        page() {
            let name = this.$route.name,
            page = this.$store.getters['page'].name
            return page || this.loadPage(name)
        },
        pageContent() {
            let page = this.page || {}
            return page.content
        },
        editContent: {
            get() {
                return this.edit !== false ? this.edit : ''
            },
            set(v) {
                this.edit = v
            }
        },
        isChanged() {
            return this.edit !==false && this.edit !== this.postContent
        }
    },
    methods: {
        ...mapActions(['loadPage', 'updatePost']),
        showEditor() {
            this.edit = this.postContent
        },
        closeEditor() {
            this.edit = false
        },
        save() {
            let id = this.queryId, post = {...this.post, content: this.editContent}
            this.updatePost({id, post}).then(this.closeEditor)
        }
    }
}
</script>

<style scoped>
p.editMenu{
    position: absolute;
    right: 30px;
    z-index: 1000;
    cursor: pointer;
}

</style>
