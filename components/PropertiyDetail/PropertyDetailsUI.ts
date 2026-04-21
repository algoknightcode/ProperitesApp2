// components/PropertyDetail/PropertyDetailsUI.ts

export const styles = {
  container: "flex-1 bg-[#050816]",

  /* HERO */
  imageWrapper: "relative",
  banner: "w-full h-[430px] rounded-b-[42px]",

  overlay:
    "absolute inset-0 rounded-b-[42px] bg-gradient-to-b from-black/15 via-black/20 to-[#050816]",

  /* TOP ICONS */
  backBtn:
    "absolute top-14 left-4 w-11 h-11 rounded-full bg-black/25 border border-white/20 backdrop-blur-xl items-center justify-center",

  shareBtn:
    "absolute top-14 right-16 w-11 h-11 rounded-full bg-black/25 border border-white/20 backdrop-blur-xl items-center justify-center",

  likeBtn:
    "absolute top-14 right-4 w-11 h-11 rounded-full bg-black/25 border border-white/20 backdrop-blur-xl items-center justify-center",

  /* TAGS */
  tagRow:
    "absolute top-32 left-4 flex-row gap-2",

  blueTag:
    "px-3 py-1.5 rounded-full bg-blue-500 text-white text-[11px] font-bold",

  greenTag:
    "px-3 py-1.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold",

  /* FLOATING GLASS CARD */
  floatingCard:
    "absolute bottom-5 left-4 right-4 rounded-[30px] px-5 py-5 bg-white/10 border border-white/15 backdrop-blur-3xl",

  title:
    "text-[28px] font-extrabold text-white",

  price:
    "text-[24px] font-bold text-blue-300 mt-1",

  location:
    "text-sm text-slate-200 ml-1",

  /* COMMON CARD */
  infoCard:
    "mx-4 mt-5 px-4 py-5 rounded-[28px] bg-white/5 border border-white/10",

  section:
    "mx-4 mt-4 px-4 py-5 rounded-[28px] bg-white/5 border border-white/10",

  sectionTitle:
    "text-white text-lg font-bold mb-4",

  /* QUICK FEATURES */
  featureRow:
    "flex-row justify-between",

  featureBox:
    "w-[31%] rounded-[24px] py-4 items-center bg-white/5 border border-white/10",

  featureLabel:
    "text-[11px] text-slate-400 mt-2",

  featureValue:
    "text-sm font-bold text-white mt-1",

  /* DESCRIPTION */
  desc:
    "text-[14px] leading-6 text-slate-300",

  /* GRID */
  grid:
    "flex-row flex-wrap justify-between mt-4",

  gridItem:
    "w-[48%] mb-3 px-4 py-4 rounded-[22px] bg-white/4 border border-white/10",

  gridLabel:
    "text-[11px] text-slate-400",

  gridValue:
    "text-white font-bold text-sm mt-1",

  /* AMENITIES */
  amenityRow:
    "flex-row flex-wrap justify-between",

  amenityBox:
    "w-[48%] mb-3 py-4 rounded-[22px] bg-white/4 border border-white/10 items-center",

  amenityText:
    "text-white text-sm font-semibold",

  /* CONTACT */
  contactRow:
    "flex-row items-center",

  avatar:
    "w-16 h-16 rounded-full mr-3 border border-white/20",

  owner:
    "text-white text-base font-bold",

  ownerSub:
    "text-slate-400 text-sm mt-1",

  chatBtn:
    "px-4 py-2 rounded-2xl bg-blue-500",

  chatText:
    "text-white font-semibold text-sm",

  /* BOTTOM BAR */
  bottomBar:
    "absolute bottom-0 left-0 right-0 px-4 py-3 flex-row items-center bg-[#07101f]/95 border-t border-white/10",

  iconBtn:
    "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center mr-3",

  visitBtn:
    "flex-1 h-12 rounded-2xl bg-blue-500 items-center justify-center shadow-lg",

  visitText:
    "text-white font-bold text-base",
};