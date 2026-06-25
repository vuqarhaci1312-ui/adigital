"use client";

import { type RefObject, useEffect } from "react";

const CAROUSEL_QUERY = "(hover: none), (max-width: 991px)";

export function useServicesCardCarousel(
  carouselRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const mq = window.matchMedia(CAROUSEL_QUERY);

    let activePointer: number | null = null;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let dragMode: "pending" | "horizontal" | "vertical" | null = null;
    let didDrag = false;

    const snapToNearest = () => {
      const card = carousel.querySelector<HTMLElement>(".services-card--item");
      if (!card) return;

      const styles = window.getComputedStyle(carousel);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 16;
      const step = card.offsetWidth + gap;
      const index = Math.round(carousel.scrollLeft / step);

      carousel.scrollTo({
        left: index * step,
        behavior: "smooth",
      });
    };

    const resetGesture = () => {
      activePointer = null;
      dragMode = null;
      carousel.classList.remove("is-dragging");
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!mq.matches || event.pointerType === "mouse") return;

      activePointer = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startScrollLeft = carousel.scrollLeft;
      dragMode = "pending";
      didDrag = false;

      carousel.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (activePointer !== event.pointerId || !dragMode) return;

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (dragMode === "pending") {
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) return;

        dragMode = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";
        if (dragMode === "horizontal") {
          carousel.classList.add("is-dragging");
        }
      }

      if (dragMode === "horizontal") {
        event.preventDefault();
        didDrag = true;
        carousel.scrollLeft = startScrollLeft - deltaX;
      }
    };

    const onPointerEnd = (event: PointerEvent) => {
      if (activePointer !== event.pointerId) return;

      if (dragMode === "horizontal") {
        snapToNearest();
      }

      try {
        carousel.releasePointerCapture(event.pointerId);
      } catch {
        // pointer already released
      }

      resetGesture();
    };

    const onClickCapture = (event: MouseEvent) => {
      if (didDrag) {
        event.preventDefault();
        event.stopPropagation();
        didDrag = false;
      }
    };

    carousel.addEventListener("pointerdown", onPointerDown);
    carousel.addEventListener("pointermove", onPointerMove, { passive: false });
    carousel.addEventListener("pointerup", onPointerEnd);
    carousel.addEventListener("pointercancel", onPointerEnd);
    carousel.addEventListener("click", onClickCapture, true);

    return () => {
      carousel.removeEventListener("pointerdown", onPointerDown);
      carousel.removeEventListener("pointermove", onPointerMove);
      carousel.removeEventListener("pointerup", onPointerEnd);
      carousel.removeEventListener("pointercancel", onPointerEnd);
      carousel.removeEventListener("click", onClickCapture, true);
    };
  }, [carouselRef]);
}
