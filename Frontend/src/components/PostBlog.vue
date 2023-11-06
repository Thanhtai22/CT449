<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="max-w-2xl w-full p-5 text-center flex flex-col gap-2 bg-slate-50 rounded-md"
      @submit.prevent="handleSubmit"
    >
      <Label class="text-xl font-bold uppercase mb-4">Thêm blog</Label>

      <input
        type="text"
        placeholder="Nhập vào tiêu đề!"
        v-model="title"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />

      <input
        type="text"
        placeholder="Nhập nội dung!"
        v-model="content"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />

      <input
        type="text"
        placeholder="Nhập tên tác giả"
        v-model="author"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />

      <input
        type="text"
        placeholder="Link ảnh"
        v-model="imgPath"
        class="w-full py-4 px-2 rounded-md outline-none border-none bg-slate-100"
      />
      <input
        type="date"
        class="py-5 bg-gray-400/30 inset-0 px-2"
        v-model="time"
      />
      <button
        class="w-full py-3 bg-green-300 mt-4 rounded-xl hover:bg-green-400/90 duration-300 font-semibold"
      >
        Đăng bài
      </button>
      <router-link
        to="/"
        class="w-full py-3 bg-gray-300 mt-4 rounded-xl hover:bg-green-400/90 duration-300 font-semibold"
      >
        Quay về trang chủ
      </router-link>
    </form>
  </div>
</template>

<script setup>
import https from "../utils/http.util";
import Input from "./Input.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const title = ref("");
const content = ref("");
const author = ref("");
const imgPath = ref("");
const time = ref("");
const router = useRouter();
const handleSubmit = () => {
  const data = {
    created_at: time.value,
    title: title.value,
    content: content.value,
    author: author.value,
    imgPath: imgPath.value,
  };

  https.post("/item/create", data).then((response) => {
    console.log(response);
    if (response.statusText === "OK") {
      alert("Tạo thành công");
      router.push("/");
    }
  });
};
</script>

<style lang="scss" scoped></style>
