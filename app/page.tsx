import SocialShareGenerator from "@/components/SocialShareGenerator";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-16">
      <h1 className="font-bold text-4xl uppercase">Social Sharer</h1>
      <p>Social Sharer is a free platform to implement the share to social media function to your web-app. Just copy and paste</p>
      <SocialShareGenerator />
    </div>
  )
}
